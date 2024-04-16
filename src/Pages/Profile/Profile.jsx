

const Profile = () => {
    return (
        <div className="bg-[#F7F8F9] min-h-screen border">
            <div className=" bg-[#FFFFFF] h-[65px] flex justify-start items-center">
                <p className="text-xl font-semibold p-2">Account Setting</p>
            </div>
            <div className="flex justify-start gap-5 p-2 pt-5 ">
                <div className="relative">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://i.postimg.cc/vBBnvpHT/smiling-blonde-business-woman-posing-with-crossed-arms.jpg" />
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0">
                        <img src="https://i.postimg.cc/BQdNX2f8/cb0775a4-2fa7-40aa-b247-965746ae82b9.png" alt="" />
                    </div>
                </div>

                <div>
                    <p className="font-bold">Marry Doe</p>
                    <p>Marry@gmail.com</p>
                </div>
            </div>
            <div className="p-2">
                <p>As an enthusiastic and passionate front-end developer, my goal is to leverage my proficiency in HTML, Tailwind CSS, and React JS, along with my experience in MongoDB, Firebase, and Node.js, to contribute to innovative and dynamic web development projects. My vision is to be a full-stack developer in 4-5 years.</p>
            </div>

            <div className="divider"></div>

        </div>
    );
};

export default Profile;