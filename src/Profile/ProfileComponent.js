
const ProfileComponent = ({
    fullName,
    bio,
    profession,
    children,
    handelAlert,


}) => {
    return (
        <div>
            <p>{fullName}</p>
             <p>{bio}</p>
             <p>{profession}</p>
             {children}
             <button onClick={handelAlert}>click me !</button>
          
        </div>
    );
};
ProfileComponent.defaultProps = {
    fullName: "soleil"
  };

 export default ProfileComponent;