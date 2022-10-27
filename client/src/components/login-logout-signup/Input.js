import { HasErrorSvg } from '../../assets/images/LoginSvg';

const Input = (type) => {
  return (
    <>
      <div className="form" ref={type.inputRef}>
        {type.smTxt ? (
          <div className="inline">
            <label htmlFor={type.id}>{type.label}</label>
            <p>{type.smTxt}</p>
          </div>
        ) : (
          <label htmlFor={type.id}>{type.label}</label>
        )}
        <input
          id={type.id}
          type={type.type}
          name={type.name}
          value={type.value}
          onChange={type.onChange}
        />
        <HasErrorSvg />
      </div>
      <p className="inValid-txt">{type.invalidTxt}</p>
      {type.reqTxt && <p className="req-txt">{type.reqTxt}</p>}
    </>
  );
};

export default Input;
