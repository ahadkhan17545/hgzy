const WinningInformation = ({ winner }) => {
  return (
    <div className="py-1.5 px-4 bg-white rounded-md">
      <div className="w-full flex items-center justify-between gap-2">
        <div className="w-1/2 flex items-center gap-1.5">
          <img
            className="w-14 h-14 rounded-full"
            src={winner.profilePic}
            alt={winner.name}
          />
          <p className="text-base font-medium">{winner.name}</p>
        </div>

        <div className="w-1/2 flex items-center gap-2">
          <img
            className="w-20 h-14 px-2 py-1 bg-gradient-to-b from-red to-red rounded-xl"
            src={winner.gameImg}
            alt="Game"
          />
          <div className="text-base text-center">
            <p className="font-bold">Receive ৳{winner.amount}</p>
            <p className="text-[#768096] text-[12px] font-bold">
              Winning amount
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinningInformation;
