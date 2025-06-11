/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import employee4 from '../../../public/images/Dashboard/employee4.png'

const SwitchProfile = ({
    showSwitchPopup,
    setShowSwitchPopup,
    switchProfilePosition,
    switchProfileRef
}) => {
    const popupRef = useRef(null);

    const profiles = [
        {
            id: 1,
            name: "Walid Sayed",
            role: "Team Leader",
        },
        {
            id: 2,
            name: "Sky Company",
            role: "Sales Manager",
        }
    ];

    const handleProfileSwitch = (profileId) => {
        console.log("Switching to profile:", profileId);
        setShowSwitchPopup(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target) &&
                switchProfileRef.current && !switchProfileRef.current.contains(event.target)) {
                setShowSwitchPopup(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setShowSwitchPopup, switchProfileRef]);

    if (!showSwitchPopup) return null;

    return (
        <div
            ref={popupRef}
            className="fixed z-50 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-80"
            style={{
                top: switchProfilePosition.top - 120,
                left: switchProfilePosition.left
            }}
        >
            <div className="space-y-4">
                {profiles.map((profile) => (
                    <div
                        key={profile.id}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => handleProfileSwitch(profile.id)}
                    >
                        <div className="flex items-center gap-3">
                            <div className="rounded-full flex items-center justify-center overflow-hidden">
                                <img
                                    src={employee4}
                                    alt={profile.name}
                                    className="w-[66px] h-[66px] object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="w-full h-full bg-gray-400 rounded-full flex items-center justify-center text-white text-sm font-medium" style={{ display: 'none' }}>
                                    {profile.name.split(' ').map(n => n[0]).join('')}
                                </div>
                            </div>
                            <div>
                                <p className="font-medium text-[#000000] text-xl">{profile.name}</p>
                                <p className="text-[#979797] text-lg font-medium">{profile.role}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            {profile.isActive ? (
                                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            ) : (
                                <input type="checkbox" className="w-6 h-6 rounded-[6px]" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SwitchProfile;