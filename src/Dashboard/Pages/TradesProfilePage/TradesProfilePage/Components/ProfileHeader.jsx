import { Link } from 'react-router-dom';
import ProfileCompletion from './ProfileCompletion'
import { useContext } from 'react';
import { AuthContext } from '../../../../../Authentication/AuthProvider';
const ProfileHeader = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className="flex p-10 flex-col lg:flex-row shadow-md rounded-md  bg-white items-center gap-10">

            <ProfileCompletion progress={70} />

            <div className="flex-1 space-y-4">
                <div>
                    <h5 className="text-2xl font-semibold">{user?.firstName} {user?.lastName}</h5>

                </div>
                <div>
                    <h6 className="font-semibold text-gray-500">Bio</h6>
                    <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, id? adipisicing elit. Earum, omnis!</p>
                </div>

                <div>
                    <Link to={'/trades/profile'}>
                        <button
                            type="submit"
                            className="px-10 py-3 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-md transition-all duration-200"
                        >
                            View as public
                        </button>
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default ProfileHeader;