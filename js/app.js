document.getElementById('generateBtn').addEventListener('click', function() {
    const topic = document.getElementById('topic').value.trim();
    const output = document.getElementById('outputArea');
    
    if (!topic) {
        output.innerHTML = '<p style="color:#ff4444; text-align:center;">⛔ Skriv ett ämne först!</p>';
        return;
    }
    
    const hooks = [
        "3 saker jag önskar jag visste om " + topic + " innan jag började...",
        "Ingen pratar om detta när det kommer till " + topic,
        "Varför 95% misslyckas med " + topic + " (och hur du undviker det)"
    ];
    
    const bodies = [
        "För 3 år sedan trodde jag att " + topic + " var lätt. Det var det inte. Här är sanningen:",
        "Jag har spenderat 50,000 kr på att lära mig " + topic + ". Spara pengarna och gör så här istället:"
    ];
    
    const ctas = ["Följ för mer 👆", "Spara detta 💾", "Tagga en vän 👇"];
    const hashtags = "#svensktiktok #företag #tips #" + topic.replace(/\s+/g, '');
    
    const hook = hooks[Math.floor(Math.random() * hooks.length)];
    const body = bodies[Math.floor(Math.random() * bodies.length)];
    const cta = ctas[Math.floor(Math.random() * ctas.length)];
    const views = Math.floor(Math.random() * 50000) + 10000;
    
    output.innerHTML = `
        <div style="animation: slideIn 0.5s ease;">
            <div style="background:#1E1E2E; padding:20px; border-radius:12px; margin-bottom:20px;">
                <p style="color:#0066FF; font-weight:bold; margin-bottom:15px;">HOOK:</p>
                <p style="font-size:1.2rem; margin-bottom:20px;">${hook}</p>
                
                <p style="color:#00D4FF; font-weight:bold; margin-bottom:15px;">MANUS:</p>
                <p style="margin-bottom:20px; line-height:1.8;">${body}<br><br>
                Steg 1: Gör din research<br>
                Steg 2: Testa olika format<br>
                Steg 3: Var konsistent</p>
                
                <p style="color:#A0A0B0; font-weight:bold; margin-bottom:15px;">CTA:</p>
                <p style="font-size:1.1rem; color:#00D4FF;">${cta}</p>
                
                <p style="margin-top:20px; color:#00D4FF;">${hashtags}</p>
            </div>
            
            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:15px; margin-bottom:20px;">
                <div style="text-align:center; padding:15px; background:#1E1E2E; border-radius:10px;">
                    <strong style="color:#0066FF; font-size:1.5rem;">${views.toLocaleString()}</strong>
                    <p style="color:#A0A0B0; font-size:0.8rem;">Beräknade visningar</p>
                </div>
                <div style="text-align:center; padding:15px; background:#1E1E2E; border-radius:10px;">
                    <strong style="color:#0066FF; font-size:1.5rem;">${Math.floor(views * 0.08).toLocaleString()}</strong>
                    <p style="color:#A0A0B0; font-size:0.8rem;">Uppskattade likes</p>
                </div>
                <div style="text-align:center; padding:15px; background:#1E1E2E; border-radius:10px;">
                    <strong style="color:#0066FF; font-size:1.5rem;">45s</strong>
                    <p style="color:#A0A0B0; font-size:0.8rem;">Rekommenderad längd</p>
                </div>
            </div>
            
            <button class="btn btn--primary" onclick="navigator.clipboard.writeText('${hook}\\n\\n${body}\\n\\n${cta}\\n${hashtags}'); this.textContent='Kopierat!'; setTimeout(()=>this.textContent='Kopiera manus', 2000);">
                Kopiera manus
            </button>
        </div>
    `;
});
