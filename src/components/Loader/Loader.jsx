import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#5d5c5d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

Loader.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  radius: PropTypes.number,
  color: PropTypes.string,
  ariaLabel: PropTypes.string,
  wrapperStyle: PropTypes.object,
  wrapperClassName: PropTypes.string,
  visible: PropTypes.bool,
};
