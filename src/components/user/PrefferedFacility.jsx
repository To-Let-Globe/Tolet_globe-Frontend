import React from "react";
import avatar from "../../assets/image/user/avatar.png";
import rectangle from "../../assets/image/user/Rectangle 2.png";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
const PrefferedFacility = () => {
  return (
    <>
      <div className="mt-28">
        <div className="flex items-center justify-center flex-col">
          <div className="bg-white h-[228px] w-[944px] flex items-center justify-between">
            <div className="flex items-center justify-between w-[85%] px-12">
              <div className="flex items-center justify-between gap-5">
                <div className="">
                  <img src={avatar} alt="" className="w-[125px] " />
                </div>
                <div className="flex flex-col items-start">
                  <p className=" text-2xl font-bold">John Doe</p>
                  <p className="px-1 py-[2px] bg-[#D9D9D9] text-[12px] rounded-sm">
                    Property Seeker
                  </p>
                  <p className="text-[16px]">
                    Passionate about finding the perfect rental space
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="px-10 py-2 border-2 border-solid border-black font-medium rounded-lg text-[16px]">
                  Logout
                </button>
                <button className="px-[18.5px] py-2 bg-[#FFC700] text-white  font-medium rounded-lg flex items-center justify-center">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <div>
              <div className="relative">
                <img src={rectangle} alt="" />
                <div className="absolute top-[120px] left-32  bottom-0">
                  <div>
                    <p className=" font-semibold text-5xl text-white mb-10">
                      Preferred facility
                    </p>
                  </div>
                  <div>
                    <div className="h-[280px] w-[280px] bg-gradient-to-b from-teal-400 to-yellow-400 absolute rounded-full opacity-50 top-[-200px] right-[-680px] z-[-1]"></div>

                    <form
                      action=""
                      className="flex justify-between gap-10 absolute text-[#D9D9D9]"
                    >
                      <section className="w-[20vw]  h-full flex flex-col gap-10 mt-32">
                        <div className="flex items-center gap-3">
                          <div>
                            <div className="check"></div>
                            <input
                              className="h-[40px] w-[37px]"
                              type="checkbox"
                              name="carparking"
                              id="carparking"
                            />
                          </div>
                          <label
                            htmlFor="carparking"
                            className="text-2xl text-[#D9D9D9]"
                          >
                            Car Parking
                          </label>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="check"></div>
                          <input
                            className="h-[40px] w-[37px]"
                            type="checkbox"
                            name="24x7watersupply"
                            id="24x7watersupply"
                          />
                          <label
                            htmlFor="24x7watersupply"
                            className="text-2xl text-[#D9D9D9]"
                          >
                            24x7 water supply
                          </label>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="check"></div>
                          <input
                            className="h-[40px] w-[37px]"
                            type="checkbox"
                            name="pets"
                            id="pets"
                          />
                          <label
                            htmlFor="pets"
                            className="text-2xl text-[#D9D9D9]"
                          >
                            Pets
                          </label>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="check"></div>
                          <input
                            className="h-[40px] w-[37px]"
                            type="checkbox"
                            name="24x7electricty"
                            id="24x7electricty"
                          />
                          <label
                            htmlFor="24x7electricty"
                            className="text-2xl text-[#D9D9D9]"
                          >
                            24x7 electricty
                          </label>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="check"></div>
                          <input
                            className="h-[40px] w-[37px]"
                            type="checkbox"
                            name="gymandfitnesscenetr"
                            id="gymandfitnesscenetr"
                          />
                          <label
                            htmlFor="gymandfitnesscenetr"
                            className="text-2xl text-[#D9D9D9]"
                          >
                            Gym and fitness center
                          </label>
                        </div>
                      </section>
                      <section className="w-[20vw]  h-full flex flex-col gap-10 mt-32">
                        <div className="flex items-center gap-3">
                          <div className="check"></div>
                          <input
                            className="h-[40px] w-[37px]"
                            type="checkbox"
                            name="swimmingpool"
                            id="swimmingpool"
                          />
                          <label
                            htmlFor="swimmingpool"
                            className="text-2xl text-[#D9D9D9]"
                          >
                            Swimming pool
                          </label>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="check"></div>
                          <input
                            className="h-[40px] w-[37px]"
                            type="checkbox"
                            name="childrensplayarea"
                            id="childrensplayarea"
                          />
                          <label
                            htmlFor="childrensplayarea"
                            className="text-2xl text-[#D9D9D9]"
                          >
                            Children's play area
                          </label>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="check"></div>
                          <input
                            className="h-[40px] w-[37px]"
                            type="checkbox"
                            name="clubhouse"
                            id="clubhouse"
                          />
                          <label
                            htmlFor="clubhouse"
                            className="text-2xl text-[#D9D9D9]"
                          >
                            Clubhouse
                          </label>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="check"></div>
                          <input
                            className="h-[40px] w-[37px]"
                            type="checkbox"
                            name="securitysurveillance"
                            id="securitysurveillance"
                          />
                          <label
                            htmlFor="securitysurveillance"
                            className="text-2xl text-[#D9D9D9]"
                          >
                            Security surveillance
                          </label>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="check"></div>
                          <input
                            className="h-[40px] w-[37px]"
                            type="checkbox"
                            name="landscapedgardens"
                            id="landscapedgardens"
                          />
                          <label
                            htmlFor="landscapedgardens"
                            className="text-2xl text-[#D9D9D9]"
                          >
                            Landscaped gardens
                          </label>
                        </div>
                      </section>
                    </form>
                  </div>
                  <div className="absolute bottom-72 text-2xl flex justify-between items-center w-[35vw] text-white">
                    <div className="flex items-center justify-center gap-2">
                      <GrPrevious className="text-[#FFC700]" />
                      <button>Preview</button>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <button>Next</button>
                      <GrNext className="text-[#FFC700]" />
                    </div>
                  </div>
                  <div className="h-[430px] w-[730px] bg-gradient-to-b from-teal-400 to-yellow-400 absolute rounded-full opacity-50 bottom-[-245px] left-[-540px] z-[-1]  rounded-bl-none rounded-br-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrefferedFacility;
