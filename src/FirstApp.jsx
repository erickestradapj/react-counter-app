import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle, name }) => {
   return (
      <>
         <span data-testid="test-title"> {title} </span>
         {/* <code>{JSON.stringify(newMessage)}</code> */}
         <p>{subtitle}</p>
         <p>{subtitle}</p>
         <p>{name}</p>
      </>
   );
};

FirstApp.propTypes = {
   title: PropTypes.string.isRequired,
   subtitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
   title: 'No title',
   subtitle: 'No subtitle',
   name: 'Erick E.',
};
