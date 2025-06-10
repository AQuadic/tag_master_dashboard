import Employee1 from '../../../public/images/Dashboard/employee1.png'
import Employee2 from '../../../public/images/Dashboard/employee2.png'
import Employee3 from '../../../public/images/Dashboard/employee3.png'
import Employee4 from '../../../public/images/Dashboard/employee4.png'
import Employee5 from '../../../public/images/Dashboard/employee5.png'
import Employee6 from '../../../public/images/Dashboard/employee6.png'
import ActiveStatus from '../icons/dashboard/ActiveStatus'

const ActiveEmployee = () => {
    const EmployeeData = [
        {
            image: Employee1,
            name: 'Mohamed reda',
            title: 'Team leader',
            activeStatus: true
        },
        {
            image: Employee2,
            name: 'Walied sayed',
            title: 'HR',
            activeStatus: true
        },
        {
            image: Employee3,
            name: 'Hatem adel',
            title: 'Marketing Manager',
            activeStatus: true
        },
        {
            image: Employee4,
            name: 'Ahmed attaia',
            title: 'Sales Manager',
            activeStatus: false
        },
        {
            image: Employee5,
            name: 'Mohamed reda',
            title: 'Team leader',
            activeStatus: true
        },
        {
            image: Employee6,
            name: 'Seif naser',
            title: 'supervisor',
            activeStatus: false
        },
    ]

    return (
        <section className="w-[360px] h-full border border-[#000000] rounded-2xl flex flex-col p-6 mt-4 md:mt-0">
            <h1 className="text-[#000000] text-2xl font-medium mx-auto">Active employees</h1>
            <div className='mt-[11px] flex flex-col gap-8'>
                {EmployeeData.map((employee, index) => (
                    <div key={index} className='flex items-center gap-[11px]'>
                        <div className="relative">
                            <img src={employee.image} alt="Employee" />
                            {employee.activeStatus && (
                                <div className="absolute top-9 -right-1">
                                    <ActiveStatus />
                                </div>
                            )}
                        </div>
                        <div>
                            <h2 className="text-[#000000] text-base font-medium">{employee.name}</h2>
                            <p className="text-[#878787] text-base font-medium">{employee.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ActiveEmployee