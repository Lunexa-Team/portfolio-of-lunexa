import React from 'react';

const ClientLogos = () => {
  const clients = [
    { name: 'Hubspot', logo: '🚀' },
    { name: 'Integromat', logo: '🔄' },
    { name: 'Notion', logo: '📝' },
    { name: 'Atlassian', logo: '🔧' },
    { name: 'Zendesk', logo: '💬' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center space-x-2 text-gray-600">
              <span className="text-2xl">{client.logo}</span>
              <span className="text-lg font-medium">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;