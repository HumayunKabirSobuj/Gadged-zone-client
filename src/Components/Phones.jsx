import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../Hooks/useAxiosCommon";
import Heading from "./Heading";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";

export default function Phones() {
    let [params, setParams] = useSearchParams();

    const brand=params.get('brand')
    console.log(brand)

    const { data: phones = [], isLoading } = useQuery({
        queryKey: ['rooms',],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/phones?brand=${brand}`);
            return data;
        }
    })

    //   console.log(phones)
    return (
        <div>

            <div className="className='pt-4  text-center h-3/4">
                <div>
                    {phones && phones.length > 0 ? (
                        <div className='pt-12 h-[400px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-14 px-5 gap-8'>
                            {phones.map(phone => (
                                <Card key={phone._id} phone={phone} />
                            ))}
                        </div>
                    ) : (
                        <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
                            <Heading
                                center={true}
                                title='No Phones Available In This Category!'
                                subtitle='Please Select Other Categories.'
                            />
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}
