const Loading = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <GridLoader
          color="#000000"
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default Loading;
