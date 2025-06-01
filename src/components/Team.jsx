
import larry from '../assets/larry.jpg';
import meghan from '../assets/meghan.jpg';
import yvonne from '../assets/yvonne.jpg';
import diana from '../assets/diana.jpg';
import michael from '../assets/michael.jpg';
import sarah from '../assets/sarah.jpg';

const Team = () => {
  const employees = [
    {
      id: 1,
      name: 'Larry F. Burnett',
      designation: 'CEO',
      salary: '$250,000',
      qualification: 'MBA, Harvard Business School',
      location: 'New York, NY',
      photo: larry
    },
    {
      id: 2,
      name: 'Meghan J. Webb',
      designation: 'CTO',
      salary: '$220,000',
      qualification: 'PhD Computer Science, MIT',
      location: 'San Francisco, CA',
      photo: meghan
    },
    {
      id: 3,
      name: 'Yvonne J. Cullum',
      designation: 'CFO',
      salary: '$230,000',
      qualification: 'CPA, MBA Finance',
      location: 'Chicago, IL',
      photo: yvonne
    },
    {
      id: 4,
      name: 'Diana H. Williams',
      designation: 'COO',
      salary: '$225,000',
      qualification: 'MSc Operations Management',
      location: 'Boston, MA',
      photo: diana
    },
    {
      id: 5,
      name: 'Michael T. Rodriguez',
      designation: 'Senior Developer',
      salary: '$150,000',
      qualification: 'BSc Computer Science',
      location: 'Austin, TX',
      photo: michael
    },
    {
      id: 6,
      name: 'Sarah K. Johnson',
      designation: 'UX Designer',
      salary: '$130,000',
      qualification: 'BFA Design',
      location: 'Portland, OR',
      photo: sarah
    }
  ];

  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-raleway font-bold text-[24px] text-[#FF3E54] mb-2">
            TEAM
          </h2>
          <h3 className="font-raleway font-bold text-3xl md:text-[40px] text-[#0E1F51] leading-tight">
            Meet Our Core People
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {employees.map((emp) => (
            <div
              key={emp.id}
              className="bg-[#F7F7F7] border border-[#0E1F51] rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              {/* Profile Image */}
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={emp.photo}
                  alt={emp.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h4 className="font-raleway font-bold text-xl text-[#0E1F51] mb-2">
                {emp.name}
              </h4>

              {/* Designation Badge */}
              <p
                className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4 ${
                  ['CEO', 'CTO', 'CFO', 'COO'].includes(emp.designation)
                    ? 'bg-[#FF3E54] text-white'
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                {emp.designation}
              </p>

              {/* Separator Bars */}
              <div className="flex justify-center space-x-2 mb-4">
                <div className="w-[60px] h-[6px] bg-[#FF3E54] rounded-full"></div>
                <div className="w-[20px] h-[6px] bg-[#FF3E54] rounded-full"></div>
              </div>

              {/* Details */}
              <div className="text-sm text-gray-600 font-raleway space-y-1">
                <p><strong>Salary:</strong> {emp.salary}</p>
                <p><strong>Qualification:</strong> {emp.qualification}</p>
                <p><strong>Location:</strong> {emp.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
