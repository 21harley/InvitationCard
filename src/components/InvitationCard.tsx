import { useState } from 'react';
import './InvitationCard.css';

const invitationLines = [
  '¡Celebra conmigo!',
  '',
  'Mi graduación como',
  '',
  'Ingeniero en Informática',
  '',
  '📅 11 de Diciembre, 2025',
  '🕗 8:30 AM',
  '📍 UNET, San Cristóbal',
  '',
  'Confirma tu asistencia antes del 5 de Diciembre',
  '',
  'John Harley Llanes Escobar'
];

export default function InvitationCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="invitation-container" style={{width: '100%', height:'80%'}}>
      <div 
        className={`invitation-card ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="card-front">
          <div className="card-content" style={{color: '#ffc824ff'}}>
            <h1 style={{color: '#ffc824ff'}}>¡Estás invitado!</h1>
            <h2 style={{color: '#ffc824ff'}}>Mi Graduación</h2>
            <p style={{color: '#ffc824ff'}}>Toca la tarjeta para ver los detalles</p>
          </div>
        </div>
        
        <div className="card-back" >
          <div className="card-content" >
            <div className="invitation-text">
              {invitationLines.map((line, i) => (
                <div key={i} className={`invitation-line ${line === '' ? 'empty-line' : ''}`}>
                  {line.includes('John Harley Llanes Escobar') ? (
                    <div style={{ display: 'flex', alignItems: 'center',justifyContent: 'center', width: '100%'}}>
                      <a 
                        href="https://wa.me/584247322600" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#25D366',
                          color: 'white',
                          width: 'auto',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          marginLeft: '10px',
                          transition: 'background-color 0.3s',
                          padding:'2px 10px'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#128C7E'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
                        title="Enviar mensaje por WhatsApp"
                      >
                        {line}
                      </a>
                    </div>
                  ) : (
                    line
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
