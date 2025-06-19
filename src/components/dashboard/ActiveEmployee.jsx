import { useQuery } from 'react-query'
import Employee1 from '/images/Dashboard/employee1.png'
import ActiveStatus from '../icons/dashboard/ActiveStatus'
import { getEmployees } from '@/api/employees'
import Spinner from '../icons/general/Spinner'

const ActiveEmployee = () => {
    const { data: employees = [], isLoading } = useQuery({
        queryKey: ["employees"],
        queryFn: getEmployees,
    });

    if (isLoading) {
        return <Spinner />
    }

    return (
        <section className="md:w-[360px] h-full border border-[#000000] rounded-2xl flex flex-col md:p-8 p-2 mt-4 md:mt-0">
            <h1 className="text-[#000000] md:text-2xl text-base font-medium mx-auto">Active employees</h1>
            <div className='mt-5 flex flex-col gap-8'>
                {employees.map((employee, index) => (
                    <div key={index} className='flex items-center gap-[11px]'>
                        <div className="relative">
                            <img src={Employee1} alt="Employee" />
                            {employee.activeStatus && (
                                <div className="absolute top-9 -right-1">
                                    <ActiveStatus />
                                </div>
                            )}
                        </div>
                        <div>
                            <h2 className="text-[#000000] text-base font-medium">{employee.name}</h2>
                            <p className="text-[#878787] md:text-base text-xs font-medium">{employee.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ActiveEmployee