import React, { useEffect } from 'react';
import { BarChart, Bar, ResponsiveContainer, PieChart, Pie, Tooltip,XAxis,YAxis,Cell  } from 'recharts';

export default function Dashboard() {
  useEffect(() => {
    const getrole = localStorage.getItem('role');
    if (getrole !== 'admin') {
      document.location.href = '/admin/login';
    }
  }, []);

  const data_nbr_home_femma = [
    { name: 'garcon', value: 55 },
    { name: 'fille', value: 45 },
  ];

  const data_Nbr_event_mois = [
    { name: 'Sept', value: 50 },
    { name: 'Oct', value: 48 },
    { name: 'Nove', value: 40 },
    { name: 'Dece', value: 35 },
    { name: 'Jan', value: 52 },
    { name: 'Fevr', value: 50 },
    { name: 'Mars', value: 60 },
    { name: 'Avril', value: 45 },
    { name: 'Mai', value: 70 },
    { name: 'Juin', value: 20 },
  ];

  const data_Nbr_event_club = [
    { name: 'Club1', value: 20 },
    { name: 'Club2', value: 50 },
    { name: 'Club3', value: 60 },
    { name: 'Club4', value: 30 },
    { name: 'Club5', value: 40 },
    { name: 'Club6', value: 45 },
    { name: 'Club7', value: 58 },
    { name: 'Club8', value: 18 },
    { name: 'Club9', value: 17 },
    { name: 'Club10', value: 25 },
    { name: 'Club11', value: 42 },
  ];
  const COLORS = ['#0088FE', '#00C49F'];
  return (
    <main className='text-white container'>
      <h1 className='fw-bold'>Dashboard</h1>
      <div className='d-flex gap-5'>
        <div className='bg-primary w-50 rounded text-center'>
          <h5>
            <i className="bi bi-people-fill fs-1"></i> <br />
            <span>Nomber des eleves totale</span>
          </h5>
          <span className='fs-3 fw-bold'>750</span>
        </div>
        <div className='bg-warning w-50 rounded text-center'>
          <h5>
            <i className="bi bi-award-fill fs-1"></i> <br />
            <span>Nomber des Cubs totale</span>
          </h5>
          <span className='fs-3 fw-bold'>50</span>
        </div>
      </div>
      <div className='row'>
        <div className='mt-5 col-md-6'>
          <h2 className='text-center text-info'>Pourcentage des élèves par genre</h2>
          <PieChart width={400} height={400}>
            <Pie
              data={data_nbr_home_femma}
              cx='50%'
              cy='50%'
              labelLine={false}
              label='name'
              outerRadius={100}
              fill='#8884d8'
              dataKey='value'
            >
              {data_nbr_home_femma.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
        </PieChart>
        </div>

        <div className='mt-5 col-md-6'>
          <h2 className='text-center text-info'>Nombre d'événements par mois</h2>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={data_Nbr_event_mois}>
              <Bar dataKey='value' fill='#0dcaf0' />
              < XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h2 className='text-center text-info'>Nombre d'événements par club</h2>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart data={data_Nbr_event_club}>
            <Bar dataKey='value' fill='#0dcaf0' />
            
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}
