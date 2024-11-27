import "./Equipo.css";

export default function Beca() {
  const teamData = [
    {
      name: "CEO Name",
      role: "CEO",
      bio: "Short biography of the CEO.",
      image: "/assets/user.png",
    },
    {
      name: "Head of Department 1",
      role: "Head of Department",
      bio: "Short biography of the head of department.",
      image: "/assets/user.png",
    },
    {
      name: "Head of Department 2",
      role: "Head of Department",
      bio: "Short biography of the head of department.",
      image: "/assets/user.png",
    },
    {
      name: "Team Lead 1",
      role: "Team Lead",
      bio: "Short biography of the team lead.",
      image: "/assets/user.png",
    },
    {
      name: "Team Lead 2",
      role: "Team Lead",
      bio: "Short biography of the team lead.",
      image: "/assets/user.png",
    },
    {
      name: "Team Lead 3",
      role: "Team Lead",
      bio: "Short biography of the team lead.",
      image: "/assets/user.png",
    },
    {
      name: "Team Lead 4",
      role: "Team Lead",
      bio: "Short biography of the team lead.",
      image: "/assets/user.png",
    },
  ];

  return (
    <div id="equipo">
      <h1>Nuestro Equipo</h1>
      <p>Conoce a los líderes de nuestra organización.</p>
      <div id="personas">
        {teamData.map((person, index) => (
          <div key={index} className="card">
            <img src={person.image} alt={`${person.name}'s profile`} />
            <h3>{person.name}</h3>
            <p>{person.role}</p>
            <p>{person.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
