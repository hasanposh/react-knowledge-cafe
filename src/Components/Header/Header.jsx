import profile from "../../assets/Cat-Picturers/cat9.jpg";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b-2 container mx-auto">
      <h1 className="text-4xl font-bold">Knowdledge Cafe</h1>
      <img className="size-16 rounded-full" src={profile} alt="" />
    </div>
  );
};

export default Header;
