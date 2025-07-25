import { useQuery } from 'react-query'
import { useState } from 'react'
import Employee1 from '/images/Dashboard/employee1.png'
import ActiveStatus from '../icons/dashboard/ActiveStatus'
import { getEmployees } from '@/api/employees'
import Spinner from '../icons/general/Spinner'

const ActiveEmployee = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useQuery({
        queryKey: ['employees', page],
        queryFn: () => getEmployees(page),
        keepPreviousData: true,
    });
    const employees = data?.data || [];

    if (isLoading) {
        return <Spinner />
    }

    return (
        <section className="md:w-[360px] h-full border border-[#000000] rounded-2xl flex flex-col md:p-8 p-2 mt-4 md:mt-0">
            <h1 className="text-[#000000] md:text-2xl text-base font-medium mx-auto">Active employees</h1>
            <div className="mt-5 flex flex-col gap-8">
                {employees.map((employee, index) => (
                    <div key={employee.id || index} className="flex items-center gap-[11px]">
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
                            <p className="text-[#878787] md:text-base text-xs font-medium">{employee.phone}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 flex justify-between">
                <button
                    disabled={!data?.links?.prev}
                    onClick={() => setPage((old) => Math.max(old - 1, 1))}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    disabled={!data?.links?.next}
                    onClick={() => setPage((old) => old + 1)}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </section>
    )
}

export default ActiveEmployee