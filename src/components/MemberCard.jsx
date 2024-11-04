import Avatar from "./Avatar.jsx";
import Button from "./Button.jsx";

const MemberCard = ({ member }) => {
  const { name, role, imgUrl } = member;

  return (
    <li className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <Avatar imgUrl={imgUrl} name={name} />
        <div>
          <p className="text-sm font-medium text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <Button variant="secondary" text="Invite" />
    </li>
  );
};

export default MemberCard;
