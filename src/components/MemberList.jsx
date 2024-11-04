import MemberCard from "./MemberCard.jsx";

const MemberList = () => {
  const members = [
    {
      id: 1,
      name: "Lindsay Walton",
      role: "Front-end Developer",
      imgUrl: "profile-1",
    },
    { id: 2, name: "Courtney Henry", role: "Designer", imgUrl: "profile-2" },
    {
      id: 3,
      name: "Tom Cook",
      role: "Director of Product",
      imgUrl: "profile-3",
    },
  ];

  const mappedData = members.map((member) => <MemberCard key={member.id} member={member} />);

  return (
    <div className="mt-8">
      <h3 className="text-sm text-gray-500">Team members previously added to projects</h3>
      <ul className="mt-4 divide-y border-y">{mappedData}</ul>
    </div>
  );
};

export default MemberList;
