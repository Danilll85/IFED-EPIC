class AboutDanila {
  constructor() {
    this.name = "Danila";
    this.role = "Frontend Developer";
    this.skills = ["React", "TypeScript", "UI/UX", "Animation", "Responsive Design"];
    this.education = "Computer Science Degree";
    this.experience = "3+ years";
    this.passion = "Turning ideas into interactive experiences";
    this.links = {
      GitHub: "https://github.com/danila",
      LinkedIn: "https://linkedin.com/in/danila",
      Email: "mailto:hello@danila.dev",
      Portfolio: "/projects",
    };
  }

  async init() {
    await this.typeEffect("class Developer {", 30);
    await this.typeEffect(` constructor() {`, 20);
    await this.typeEffect(`     this.name = "${this.name}";`, 30);
    await this.typeEffect(`     this.role = "${this.role}";`, 30);
    await this.typeEffect(`     this.specialization = "${this.skills.join(", ")}";`, 40);
    await this.typeEffect(`...}`, 20);
    await this.typeEffect("}", 20);

    await this.delay(500);

    await this.typeEffect(`// ${this.passion}`, 40);
    await this.typeEffect(`> Education: ${this.education}`, 40);
    await this.typeEffect(`> Experience: ${this.experience}`, 40);

    await this.delay(800);

    await this.typeEffect("> Core Skills:", 40);
    for (const skill of this.skills) {
      await this.typeEffect(`- ${skill}`, 30 + Math.random() * 50);
    }

    await this.delay(1000);
    await this.typeEffect("> Connect with me:", 40);
    this.showLinks();
  }

  async typeEffect(text, speed) {
    const output = document.getElementById("output");
    const line = document.createElement("div");
    output.appendChild(line);

    for (let i = 0; i <= text.length; i++) {
      await this.delay(speed);
      line.textContent = text.substring(0, i);
      output.scrollTop = output.scrollHeight;
    }
  }

  showLinks() {
    const output = document.getElementById("output");
    const linksContainer = document.createElement("div");
    linksContainer.style.marginTop = "15px";

    Object.entries(this.links).forEach(([platform, url]) => {
      const link = document.createElement("a");
      link.href = url;
      link.className = "console-link";
      link.textContent = platform;
      link.target = "_blank";
      linksContainer.appendChild(link);
    });

    output.appendChild(linksContainer);
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

setTimeout(() => {
  const danila = new AboutDanila();
  danila.init();
}, 2000);
