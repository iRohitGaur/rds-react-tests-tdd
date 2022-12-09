const StarbucksInput = ({ name, value, onChange, error }) => {
  return (
    <>
      <input
        aria-label={name}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {error && <div>{error}</div>}
    </>
  );
};

export default StarbucksInput;
