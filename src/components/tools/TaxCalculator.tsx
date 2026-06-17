"use client";

import { useMemo, useState } from "react";
import { IndianRupee, Calculator, Percent, Info } from "lucide-react";
import { cn } from "@/lib/cn";

const inr = (n: number) =>
  "₹" + Math.round(n).toLocaleString("en-IN");

/** New tax regime slabs — FY 2025-26 (AY 2026-27). */
const slabs = [
  { upTo: 400000, rate: 0 },
  { upTo: 800000, rate: 0.05 },
  { upTo: 1200000, rate: 0.1 },
  { upTo: 1600000, rate: 0.15 },
  { upTo: 2000000, rate: 0.2 },
  { upTo: 2400000, rate: 0.25 },
  { upTo: Infinity, rate: 0.3 },
];

function computeIncomeTax(gross: number, salaried: boolean) {
  const standardDeduction = salaried ? 75000 : 0;
  const taxable = Math.max(0, gross - standardDeduction);

  let tax = 0;
  let last = 0;
  for (const slab of slabs) {
    if (taxable > last) {
      const amt = Math.min(taxable, slab.upTo) - last;
      tax += amt * slab.rate;
      last = slab.upTo;
    } else break;
  }

  // Section 87A rebate — new regime: full rebate if taxable income ≤ ₹12,00,000.
  const rebate = taxable <= 1200000 ? tax : 0;
  const afterRebate = tax - rebate;
  const cess = afterRebate * 0.04;
  const total = afterRebate + cess;

  return { taxable, standardDeduction, tax, rebate, cess, total };
}

export function TaxCalculator() {
  const [tab, setTab] = useState<"income" | "gst">("income");

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
      <div className="grid grid-cols-2 border-b border-line">
        {(
          [
            { key: "income", label: "Income Tax", icon: Calculator },
            { key: "gst", label: "GST", icon: Percent },
          ] as const
        ).map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={cn(
              "flex items-center justify-center gap-2 py-4 font-heading text-sm font-semibold transition-colors",
              tab === t.key
                ? "bg-navy text-white"
                : "bg-light text-navy-700 hover:bg-white"
            )}
          >
            <t.icon className="h-4 w-4" /> {t.label} Calculator
          </button>
        ))}
      </div>
      <div className="p-6 sm:p-8">
        {tab === "income" ? <IncomeTax /> : <GstCalc />}
      </div>
    </div>
  );
}

function IncomeTax() {
  const [income, setIncome] = useState(1200000);
  const [salaried, setSalaried] = useState(true);
  const r = useMemo(() => computeIncomeTax(income, salaried), [income, salaried]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-700">
          Annual Gross Income
        </label>
        <div className="flex items-center gap-2 rounded-xl border border-line bg-light px-4 py-3 focus-within:border-royal">
          <IndianRupee className="h-5 w-5 text-muted" />
          <input
            type="number"
            min={0}
            step={50000}
            value={income}
            onChange={(e) => setIncome(Math.max(0, Number(e.target.value)))}
            className="w-full bg-transparent text-lg font-semibold text-navy outline-none"
          />
        </div>
        <input
          type="range"
          min={0}
          max={5000000}
          step={50000}
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          className="mt-4 w-full accent-[#2563eb]"
        />
        <div className="mt-1 flex justify-between text-xs text-muted">
          <span>₹0</span>
          <span>₹50L</span>
        </div>

        <label className="mt-6 flex cursor-pointer items-center gap-3 rounded-xl border border-line bg-light px-4 py-3">
          <input
            type="checkbox"
            checked={salaried}
            onChange={(e) => setSalaried(e.target.checked)}
            className="h-4 w-4 accent-[#2563eb]"
          />
          <span className="text-sm font-medium text-navy">
            I am salaried (apply ₹75,000 standard deduction)
          </span>
        </label>

        <p className="mt-4 flex items-start gap-2 text-xs text-muted">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          Estimate under the New Tax Regime (FY 2025-26). Income up to ₹12&nbsp;lakh
          taxable is fully rebated under Section 87A.
        </p>
      </div>

      <div className="rounded-2xl bg-navy p-6 text-white">
        <p className="text-sm text-slate-300">Estimated total tax payable</p>
        <p className="mt-1 font-display text-4xl font-extrabold text-gradient-gold">
          {inr(r.total)}
        </p>
        <dl className="mt-6 space-y-3 text-sm">
          {[
            ["Gross income", inr(income)],
            ["Standard deduction", "− " + inr(r.standardDeduction)],
            ["Taxable income", inr(r.taxable)],
            ["Tax before rebate", inr(r.tax)],
            ["87A rebate", "− " + inr(r.rebate)],
            ["Health & education cess (4%)", inr(r.cess)],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between border-b border-white/10 pb-2">
              <dt className="text-slate-300">{k}</dt>
              <dd className="font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs text-slate-400">
          Effective tax rate:{" "}
          <strong className="text-white">
            {income > 0 ? ((r.total / income) * 100).toFixed(1) : "0.0"}%
          </strong>
        </p>
      </div>
    </div>
  );
}

function GstCalc() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(18);
  const [mode, setMode] = useState<"add" | "remove">("add");

  const { base, gst, total } = useMemo(() => {
    if (mode === "add") {
      const gst = (amount * rate) / 100;
      return { base: amount, gst, total: amount + gst };
    }
    const base = amount / (1 + rate / 100);
    return { base, gst: amount - base, total: amount };
  }, [amount, rate, mode]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <div className="grid grid-cols-2 gap-2 rounded-xl bg-light p-1">
          {(
            [
              { key: "add", label: "Add GST" },
              { key: "remove", label: "Remove GST" },
            ] as const
          ).map((m) => (
            <button
              key={m.key}
              onClick={() => setMode(m.key)}
              className={cn(
                "rounded-lg py-2 text-sm font-semibold transition-colors",
                mode === m.key ? "bg-royal text-white" : "text-navy-700"
              )}
            >
              {m.label}
            </button>
          ))}
        </div>

        <label className="mt-5 mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-700">
          {mode === "add" ? "Amount (excl. GST)" : "Amount (incl. GST)"}
        </label>
        <div className="flex items-center gap-2 rounded-xl border border-line bg-light px-4 py-3 focus-within:border-royal">
          <IndianRupee className="h-5 w-5 text-muted" />
          <input
            type="number"
            min={0}
            value={amount}
            onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
            className="w-full bg-transparent text-lg font-semibold text-navy outline-none"
          />
        </div>

        <p className="mt-5 mb-2 text-xs font-semibold uppercase tracking-wide text-navy-700">
          GST Rate
        </p>
        <div className="flex flex-wrap gap-2">
          {[5, 12, 18, 28].map((r) => (
            <button
              key={r}
              onClick={() => setRate(r)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                rate === r
                  ? "bg-navy text-white"
                  : "border border-line bg-white text-navy-700 hover:border-royal"
              )}
            >
              {r}%
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-navy p-6 text-white">
        <p className="text-sm text-slate-300">Total amount</p>
        <p className="mt-1 font-display text-4xl font-extrabold text-gradient-gold">
          {inr(total)}
        </p>
        <dl className="mt-6 space-y-3 text-sm">
          {[
            ["Base amount", inr(base)],
            [`GST @ ${rate}%`, inr(gst)],
            [`CGST @ ${rate / 2}%`, inr(gst / 2)],
            [`SGST @ ${rate / 2}%`, inr(gst / 2)],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between border-b border-white/10 pb-2">
              <dt className="text-slate-300">{k}</dt>
              <dd className="font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
