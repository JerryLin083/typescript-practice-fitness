type Props = {
  name: string;
  image: string;
  description?: string;
};

const ClassCard = ({ name, description, image }: Props) => {
  return (
    <div className="relative h-[350px] min-w-[450px]">
      <div className="flexCenter absolute inset-0 z-[30] flex-col bg-primary-500 p-5 opacity-0 transition duration-500 hover:opacity-90">
        <h4 className="text-font text-2xl">{name}</h4>
        <p className="mt-8 whitespace-normal text-center text-white">
          {description}
        </p>
      </div>
      <img
        key={name}
        src={image}
        alt={name}
        className="snap-center object-cover"
      />
    </div>
  );
};

export default ClassCard;
