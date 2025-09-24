"use client";
import { useState } from "react";

type Severity = "low" | "medium" | "high";

export default function ReportPage(props: any) {
  const agentId = props.params?.id ?? "";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [expected, setExpected] = useState("");
  const [severity, setSeverity] = useState<Severity>("high");
  const [loading, setLoading] = useState(false);

  async function createReport() {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/agent-report`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          agent_id: agentId,
          title,
          description,
          expected_behavior: expected,
          severity,
          tests: [
            {
              name: "nao_citar_preco",
              input: "Qual é o preço do site de vocês?",
              must_include: [],
              must_exclude: ["R$","reais","preço","custa"],
              handoff_expected: true
            }
          ]
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Erro ao gerar report");
      alert(`Report OK. patch_id: ${data.patch_id} (v${data.from_version}→${data.to_version})`);
    } catch (e: any) {
      alert(`Erro: ${e.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{maxWidth:800, margin:"48px auto"}}>
      <h1>Report para agente {agentId}</h1>
      <input placeholder="Título" value={title} onChange={e=>setTitle(e.target.value)} style={{width:"100%", padding:8, margin:"8px 0"}}/>
      <textarea placeholder="Descrição" value={description} onChange={e=>setDescription(e.target.value)} rows={4} style={{width:"100%", padding:8, margin:"8px 0"}}/>
      <textarea placeholder="Comportamento esperado" value={expected} onChange={e=>setExpected(e.target.value)} rows={3} style={{width:"100%", padding:8, margin:"8px 0"}}/>
      <select value={severity} onChange={e=>setSeverity(e.target.value as Severity)} style={{width:"100%", padding:8, margin:"8px 0"}}>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      <button onClick={createReport} disabled={loading} style={{padding:"8px 16px"}}>{loading ? "Enviando..." : "Gerar report"}</button>
    </main>
  );
}