const TeamMember = ({ name, role, description, image }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
      <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
            <span className="text-3xl text-blue-600 font-bold">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-blue-600 font-medium mb-3">{role}</div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'علی محمدی',
      role: 'مدیر عامل',
      description: 'با ۱۰ سال تجربه در زمینه فناوری اطلاعات و مدیریت پروژه',
    },
    {
      name: 'فاطمه کریمی',
      role: 'مدیر فنی',
      description: 'متخصص توسعه نرم‌افزار و زیرساخت‌های کافی نت',
    },
    {
      name: 'رضا احمدی',
      role: 'مدیر مارکتینگ',
      description: 'کارشناس دیجیتال مارکتینگ و استراتژی‌های کسب و کار',
    },
    {
      name: 'سارا قاسمی',
      role: 'مدیر طراحی',
      description: 'طراح تجربه کاربری با ۸ سال سابقه در پروژه‌های بزرگ',
    },
  ]

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            تیم حرفه‌ای <span className="text-blue-600">نتچی</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            گروهی از متخصصان با تجربه که بهترین خدمات را ارائه می‌دهند
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection