

// eslint-disable-next-line react/prop-types
const Dividar = ({title,subTitle}) => {
    return (
        <div className="my-3 lg:my-7">
            <h1 className="lg:text-3xl text-xl text-orange-600 font-semibold text-center">- - - {title} - - -</h1>
            <h1 className="lg:text-2xl text-center font-thin">{subTitle}</h1>
        </div>
    );
};

export default Dividar;