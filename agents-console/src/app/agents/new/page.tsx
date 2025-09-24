"use client";
import { useState } from "react";

export default function NewAgentPage() {
  const [name, setName] = useState("");
  const [channel, setChannel] = useState("whatsapp");
  const [objetivos, setObjetivos] = useState("");
  const [limites, setLimites] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit() {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/agent-create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          agent_name: name,
          channel,
          objetivos,
          limites,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Erro ao criar agente");
      alert(`Agente criado: ${data.agent_id} (v${data.version})`);
    } catch (e: any) {
      alert(`Erro: ${e.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{maxWidth:800, margin:"48px auto"}}>
      <h1>Criar agente</h1>
      <input placeholder="Nome do agente" value={name} onChange={e=>setName(e.target.value)} style={{width:"100%", padding:8, margin:"8px 0"}}/>
      <select value={channel} onChange={e=>setChannel(e.target.value)} style={{width:"100%", padding:8, margin:"8px 0"}}>
        <option value="whatsapp">WhatsApp</option>
        <option value="web">Web</option>
        <option value="instagram">Instagram</option>
        <option value="voice">Voice</option>
        <option value="phone">Phone</option>
      </select>
      <textarea placeholder="Objetivos" value={objetivos} onChange={e=>setObjetivos(e.target.value)} rows={4} style={{width:"100%", padding:8, margin:"8px 0"}}/>
      <textarea placeholder="Limites / guard-rails" value={limites} onChange={e=>setLimites(e.target.value)} rows={4} style={{width:"100%", padding:8, margin:"8px 0"}}/>
      <button onClick={onSubmit} disabled={loading} style={{padding:"8px 16px"}}>{loading ? "Gerando..." : "Gerar agente"}</button>
    </main>
  );
}