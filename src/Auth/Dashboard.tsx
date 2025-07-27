// import Dash from "../assets/Dash1.png"

const Dashboard: React.FC = () => {
  return (
    <main className="justify-between items-center">
      <header className="h-[70px] w-[100%] bg-blue-500 "></header>
      <div className="h-[600px] w-[100%]bg-[#f1f5f9] flex ">
        <div className="h-[800px] bg-[#f1f5f9] w-[380px] flex gap-1">
          <div className="h-[800px] w-[70px] bg-pink-500 justify-center flex gap-6 flex-col">
            <div className="h-[40px] w-[50px] bg-blue-500 "></div>
            <div className="h-[40px] w-[50px] bg-blue-500 "></div>
            <div className="h-[40px] w-[50px] bg-blue-500 "></div>
            <div className="h-[40px] w-[50px] bg-blue-500 "></div>
            <div className="h-[40px] w-[50px] bg-blue-500 "></div>
            <div className="h-[40px] w-[50px] bg-blue-500 "></div>
            <div className="h-[40px] w-[50px] bg-blue-500 "></div>
            <div className="h-[40px] w-[50px] bg-blue-500 "></div>
            <div className="h-[40px] w-[50px] bg-blue-500 "></div>
            <div className="h-[40px] w-[50px] bg-blue-500 "></div>
            <div className="h-[40px] w-[50px] bg-blue-500 "></div>
            <div className="h-[40px] w-[50px] bg-blue-500 "></div>
          </div>
          <div className="mt-[50px] justify-between"> Event
            <div className="h-[150px] w-[270px] rounded-md">
              {/* <img src={Dash} className="" /> */}
            </div>
            <div className="h-[496px] w-[270px] bg-amber-700 rounded-md"></div>
            <div className="h-[150px] w-[270px] bg-amber-700 rounded-md"></div>
          </div>
        </div>
        <div className="h-[600px] w-[1000px] bg-amber-500 ">
          <div className="h-[220px] w-[1000px] bg-[#f1f5f9]">
            <div className=""></div>
            <div className="w-[950px] h-[50px] bg-[#eafaf7] rounded-md justify-center items-center border-[#a0e8db]"></div>
          </div>
          <div className="h-[450px] w-[1000px] bg-[#f1f5f9] justify-center flex flex-col gap-2 items-center">
            <div className="h-[39px] w-[950px] bg-white flex gap-6 justify-center items-center border-black">
              <div className="w-[180px] h-[30px] ml-[10px] justify-center items-center text-[14px] leading-[21px] font-semibold">
                Event Name
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-semibold">
                Start Date
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-semibold">
                End Date
              </div>
              <div className="w-[180px] h-[30px] text-[14px] leading-[21px] font-semibold">
                Number Registered
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-semibold">
                Total
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-semibold">
                Status
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-semibold">
                Action
              </div>
            </div>
            <div className=" h-[39px] w-[950px] bg-white flex gap-4 justify-center items-center border-black ">
              <div className="w-[180px] h-[30px] ml-[10px] justify-center items-center text-[14px] leading-[21px] font-normal">
                Graduation Ceremony
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                01 Jan, 2023
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                01 Jan, 2023
              </div>
              <div className="w-[180px] h-[30px] text-[14px] leading-[21px] font-normal  ">
                0
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                1,500
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                <div className="w-[50px] h-[22px] text-[12px] leading-[16px] font-medium rounded-md items-center justify-center flex bg-[#dbeafe] ">
                  Draft
                </div>
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal ">
                Action
              </div>
            </div>
            <div className=" h-[39px] w-[950px] bg-white flex gap-4 justify-center items-center border-black  ">
              <div className="w-[180px] h-[30px] ml-[10px] justify-center items-center text-[14px] leading-[21px] font-normal">
                Sports Game
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                01 Dec, 2023
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                07 Dec, 2023
              </div>
              <div className="w-[180px] h-[30px] text-[14px] leading-[21px] font-normal  ">
                24, 130
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                30,000
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                <div className="w-[70px] h-[22px] text-[12px] leading-[16px] font-medium rounded-md items-center justify-center flex bg-[#d2f4ee] ">
                  Ongoing
                </div>
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal ">
                Action
              </div>
            </div>
            <div className=" h-[39px] w-[950px] bg-white flex gap-4 justify-center items-center border-black  ">
              <div className="w-[180px] h-[30px] ml-[10px] justify-center items-center text-[14px] leading-[21px] font-normal">
                Cultural Festival
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                05 Aug, 2023
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                10 Aug, 2023
              </div>
              <div className="w-[180px] h-[30px] text-[14px] leading-[21px] font-normal  ">
                19,121
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                20,000
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                <div className="w-[70px] h-[22px] text-[12px] leading-[16px] font-medium rounded-md items-center justify-center flex bg-[#fee2e2] ">
                  Closed
                </div>
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal ">
                Action
              </div>
            </div>
            <div className=" h-[39px] w-[950px] bg-white flex gap-4 justify-center items-center border-black  ">
              <div className="w-[180px] h-[30px] ml-[10px] justify-center items-center text-[14px] leading-[21px] font-normal">
                Award Ceremony
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                11 Nov, 2023
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                11 Nov, 2023
              </div>
              <div className="w-[180px] h-[30px] text-[14px] leading-[21px] font-normal  ">
                748
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                1,100
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                <div className="w-[70px] h-[22px] text-[12px] leading-[16px] font-medium rounded-md items-center justify-center flex bg-[#fee2e2] ">
                  Ongoing
                </div>
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal ">
                Action
              </div>
            </div>
            <div className=" h-[39px] w-[950px] bg-white flex gap-4 justify-center items-center border-black  ">
              <div className="w-[180px] h-[30px] ml-[10px] justify-center items-center text-[14px] leading-[21px] font-normal">
                Community Clean-Up Day
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                15 Oct, 2023
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                15 Oct, 2023
              </div>
              <div className="w-[180px] h-[30px] text-[14px] leading-[21px] font-normal  ">
                1,142
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                1,200
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                <div className="w-[70px] h-[22px] text-[12px] leading-[16px] font-medium rounded-md items-center justify-center flex bg-[#fee2e2] ">
                  Closed
                </div>
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal ">
                Action
              </div>
            </div>
            <div className=" h-[39px] w-[950px] bg-white flex gap-4 justify-center items-center border-black  ">
              <div className="w-[180px] h-[30px] ml-[10px] justify-center items-center text-[14px] leading-[21px] font-normal">
                Theatre Performance
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                18 Feb, 2024
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                18 Feb, 2024
              </div>
              <div className="w-[180px] h-[30px] text-[14px] leading-[21px] font-normal  ">
                0
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                800
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                <div className="w-[70px] h-[22px] text-[12px] leading-[16px] font-medium rounded-md items-center justify-center flex bg-[#fee2e2] ">
                  Draft
                </div>
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal ">
                Action
              </div>
            </div>
            <div className=" h-[39px] w-[950px] bg-white flex gap-4 justify-center items-center border-black ">
              <div className="w-[180px] h-[30px] ml-[10px] justify-center items-center text-[14px] leading-[21px] font-normal">
                Business Conference
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                03 June, 2023
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                19 June, 2023
              </div>
              <div className="w-[180px] h-[30px] text-[14px] leading-[21px] font-normal  ">
                231
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                1,000
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal">
                <div className="w-[70px] h-[22px] text-[12px] leading-[16px] font-medium rounded-md items-center justify-center flex bg-[#fee2e2] ">
                  Ongoing
                </div>
              </div>
              <div className="w-[100px] h-[30px] text-[14px] leading-[21px] font-normal ">
                Action
              </div>
            </div>
            <button className="h-[38px] w-[121px] bg-blue-700 flex justify-center items-center rounded-md text-[white] text-[13px] font-normal leading-[20px]">
              Load More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
