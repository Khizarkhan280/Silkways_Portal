import { useState } from "react";
import BiltyField from "./BiltyField";

const emptyForm = () => ({
  biltyNo: "", origin: "", destination: "", to: "", from: "",
  pieces: "", packing: "", weight: "", amount: "", otherCharges: "",
  description: "", date: new Date().toLocaleDateString("en-CA"),
});

export default function AddBiltyForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [saving, setSaving] = useState(false);

  // Rate per Kg = Total Rs / Weight
  const rate =
    form.weight > 0 && form.amount !== ""
      ? Math.round((form.amount / form.weight) * 100) / 100
      : "";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus({ type: "", text: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saving) return;
    setSaving(true);
    setStatus({ type: "", text: "" });
    try {
      // TODO (backend developer): yahan API call lagani hai.
      // Bhejne wala data: { ...form, rate }
      // Example: await api("/bilties", { method: "POST", body: JSON.stringify(form) });
      console.log("Bilty form data:", { ...form, rate });

      setForm(emptyForm());
      setStatus({ type: "success", text: "BILTY SAVED SUCCESSFULLY." });
      document.getElementById("biltyNo")?.focus();
    } catch (err) {
      setStatus({ type: "error", text: err.message || "SOMETHING WENT WRONG." });
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="bilty-card">
      <div className="bilty-card-head">
        <p className="bilty-assoc">WE ARE ASSOCIATE PIA, SHAHEEN, AIR BLUE</p>
        <p className="bilty-service">DOMESTIC CARGO</p>
      </div>

      <form className="bilty-body" onSubmit={handleSubmit}>
        <h1 className="bilty-title">ADD BILTY</h1>
        {status.text && (
          <div className={`bilty-status bilty-status-${status.type}`} role="alert">
            {status.text}
          </div>
        )}

        <BiltyField label="Bilty No." name="biltyNo" placeholder="ENTER BILTY NUMBER" value={form.biltyNo} onChange={handleChange} required />
        <BiltyField label="Origin" name="origin" placeholder="ENTER ORIGIN" value={form.origin} onChange={handleChange} required />
        <BiltyField label="Destination" name="destination" placeholder="ENTER DESTINATION" value={form.destination} onChange={handleChange} required />
        <BiltyField label="To" name="to" placeholder="ENTER CONSIGNEE NAME" value={form.to} onChange={handleChange} required />
        <BiltyField label="From" name="from" placeholder="ENTER SENDER NAME" value={form.from} onChange={handleChange} required />
        <BiltyField label="No. of Pieces" name="pieces" type="number" step="1" min="1" inputMode="numeric" placeholder="ENTER NUMBER OF PIECES" value={form.pieces} onChange={handleChange} required />
        <BiltyField label="Type of Packing" name="packing" placeholder="ENTER TYPE OF PACKING" value={form.packing} onChange={handleChange} required />
        <BiltyField label="Weight" name="weight" unit="KG" type="number" step="0.01" min="0.01" inputMode="decimal" placeholder="ENTER WEIGHT" value={form.weight} onChange={handleChange} required />
        <BiltyField label="Total Rs." name="amount" type="number" step="0.01" min="0" inputMode="decimal" placeholder="ENTER TOTAL AMOUNT" value={form.amount} onChange={handleChange} required />
        <BiltyField label="Rate per Kg" name="rate" unit="RS/KG" placeholder="AUTO CALCULATED" value={rate} readOnly />
        <BiltyField label="Other Charges" name="otherCharges" type="number" step="0.01" min="0" inputMode="decimal" placeholder="ENTER OTHER CHARGES" value={form.otherCharges} onChange={handleChange} />
        <BiltyField as="textarea" label="Description" name="description" placeholder="ENTER DESCRIPTION OF GOODS" value={form.description} onChange={handleChange} required />
        <BiltyField label="Date" name="date" type="date" value={form.date} onChange={handleChange} required />

        <div className="bilty-actions">
          <button type="submit" className="btn-primary bilty-submit" disabled={saving}>
            {saving ? "SAVING..." : "ADD BILTY"}
          </button>
        </div>
      </form>
    </section>
  );
}