const Navitem = ({ icon, heading }: { icon: React.FC; heading: string }) => {
  return (
    <>
      <div className="flex flex-row gap-2">
        <>{icon}</>
        {heading}
      </div>
    </>
  );
};

export default Navitem;
