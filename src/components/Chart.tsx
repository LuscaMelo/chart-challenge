
import data from '../assets/data/data.json'
import './Chart.css'

export const Chart = () => {

    const day = "wed"

    return (
        <div className="w-[90%] max-w-[600px] py-8">
            <div className="flex justify-between items-center bg-theme-700 rounded-3xl p-8 text-white">
                <div>
                    <span>My balance</span>
                    <h3 className="font-semibold text-2xl md:text-3xl mt-1">$921.48</h3>
                </div>
                <div>
                    <img src="logo.svg" alt="logo" />
                </div>
            </div>

            <div className="bg-theme-300 rounded-3xl p-8 pb-10 mt-6">
                <h3 className="font-bold text-2xl md:text-3xl text-font">Spending - Last 7 days</h3>
                <div className="h-[200px] mt-8 md:h-[310px] grid gap-2 md:gap-4 grid-cols-7 pb-8 border-b-2 border-theme-500">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-end h-[100%]">
                            <div className={item.day == day ? `bar relative col-1 bg-theme-blue h-[20%] w-[100%] rounded cursor-pointer` : `bar relative col-1 bg-theme-700 h-[20%] w-[100%] rounded md:rounded-lg cursor-pointer`}
                                style={{ height: item.amount * 1.3 + "%" }}
                            >
                                <div className='hidden absolute top-[-28px] md:top-[-45px] left-[50%] translate-x-[-50%] bg-theme-hover text-white text-[10px] md:text-lg font-bold px-[5px] md:px-3 py-1 rounded '>{"$" + item.amount}</div>
                            </div>
                            <span className="text-sm text-font-light font-semibold mt-2">{item.day}</span>
                        </div>
                    ))}

                </div>
                <div className="flex justify-between items-end mt-8">
                    <div>
                        <span className="text-font-light">Total this month</span>
                        <h3 className="font-bold text-font text-3xl md:text-5xl mt-1">$478.33</h3>
                    </div>
                    <div className='flex flex-col items-end'>
                        <h5 className="font-bold text-font">+2.4%</h5>
                        <span className="text-font-light">from last month</span>
                    </div>
                </div>
            </div>
        </div>

    )
}
