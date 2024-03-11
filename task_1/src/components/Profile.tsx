function Profile() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text- text-4xl font-bold text-green-800">Hulk</h1>
      <div className="h-44 w-44 overflow-hidden rounded-full border border-green-700 bg-purple-100">
        <img
          src="/assets/profilePhoto.png"
          alt="Profile"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default Profile;
