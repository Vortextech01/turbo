function Github() {
  return (
    <a
      href="https://sapienslaboratories.com/protected"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Turbo GitHub repo"
      target="_blank"
      rel="noreferrer"
    >
      <img src="https://images.payhip.com/o_1h181504nprl12c619ve1dqkeit.gif" alt="Github icon" />
    </a>
  );
}

function Discord() {
  return (
    <a
      href="https://sapienslaboratories.com/playground"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Turbo Discord server"
      target="_blank"
      rel="noreferrer"
    >
      🧬 {/* Emoji example */}
    </a>
  );
}

export { Github, Discord };
