import { useNavigate } from 'react-router-dom';

const Compras = () => {
  const navigate = useNavigate();

  const manejarClickWalmart = () => {
    navigate('/Walmart');
  };

  const manejarClickCostco = () => {
    navigate('/Costco');
  };

  return (
    <section className="px-6 py-10 bg-[#f9fbfd]">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Compras Disponibles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Tarjeta 1 - Walmart */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition">
          <img
            src="data:image/png;base64,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"
            alt="Walmart"
            className="w-full h-50  object-contain bg-gray-100"
          />
          <div className="p-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Walmart</h3>
            <p className="text-sm text-gray-500 mb-4">
              Contrato inteligente estándar para transacciones y acuerdos básicos en blockchain.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-800">200 MXN</span>
              <button
                onClick={manejarClickWalmart}
                className="text-sm text-blue-600 hover:underline flex items-center"
              >
                Comprar <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta 2 - Costco */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAqFBMVEX///9+uQD/uQDzUCIAo+90dHR2dnZra2tubm4AoO9tbW11dXVpaWl5eXlxcXG4uLh2tQDd68f6/PT09PT/tADyQQDzdVrzTBqZmZnyWS/+0HKt2vj//PHExMTc3NyFvBVywvKOzfT+2I/2/vXn5+dNtPD508v4vrWCgoLMzMzu7u6tra2Pj4+kpKTT09OLi4v50cn87OnybU7xMwDzfGHG5fn+zWcAm+5X4ngyAAAD8klEQVR4nO3Yi3acNhSFYZJUlwhJtCapp02hTUMbmJt7S/r+b9YjwIDr1JnYy8Fu/m8texgGMNojHQlnGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBI/Lrw2+/ZN0tr39ta/ng5+/Ptm6+Xzta+uZV8e/5s8lIyeTIjEzKZkMl1a2VStDqU93j9uzglk26z2RTTGeldJ43y4Q5/tjUq+secSRG19tMZSukoCflgulv/1cro/bEqs/L2l7hHJ2WiQrDV+KY2ISjJZOfj7b/nvXbp5IP3Hz10BSdmokI7vtlr1WeS3aXnt0EN17J3uff7clom+UGbpt8uvTrkqlheoqm3l5vlsLVtmimxct7e1pebYyabx5yJbZw6DNsxr2PKZGP7fl8ejPC1lAhfV97LJ13wsicc+48vvNilzUql3W0tiUQddBQqaBXbD93WqvpMzs/Pb87ESTc3/bZSu2bIpC+7jY/KRuu7rIpRSowppEhoK+3NUzylTC8h9xs5cm9kt5Xdxyy4IAXKOafTi16r6f/pr+9mz96+efLj7Mkik/JobZojjs5s60UmUdvDNiuLlEkwF8fuePQhSF/obPCN9KootbmRn8LotpEDXfBZ3cjYaeq6uQixrusVW397KRNpferke3WR1XbIRDpOZfPDeFAlk1N6bYPpi0oVZbQdcjfWGh9i/7pTaSJv9UOuJ69/Wnh39v772fvLY/pMCiXf+9bHbpnJXk8Lr6rvElKD9X7YIXO27NRDXald3heVbGv0JmXSJ/RAM/nl+ezvVz+8eDp7sRw70hi1y3ZRglhkosZvP0uZ2NT6qfGZDnJAiNoEGXTdkFiWompTZ3rYmXw1eX5TJtInYmYll2xRT65mkirDnEkenPzeOaVl3vmfZnK0cZPGz5SJSW2bx47qM5GxMY4dNy7zCqm2ZW2vjp3HmsnTq5lkMei+zi4ykYo59orLTKR7+L6sdjaOK7sil098GJq/i2n+mjIxn62hn+D0fiITa4hpPl7Uk9IHv5Nas+umTCqndZqLXZCTdvKcl0bZVrLIZS7OKq/TemScdw65jKhmnYbf4BMykQBShZgySeuTzuvoje/XbEMmssDNnfFOydo2PeQpE21as7VRyTLWqv4ZYZx3jiZYrz5/oz/ipEzcUDU2rl+M1MalTGK/tm8unKxIpQtUzo+rr0o7a80+jaBKFqvGDsOriLLbbfortXEYSQfvzF3+DXM/TsnkZouHvEvyDPiBzSvb88m3vPF7dEqN/dKQyXVkct2/1/ZLX2omr14vvDv7eWntewMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAemH8AshNkhNXUYtcAAAAASUVORK5CYII="
            alt="Costco"
            className="w-[100%] h-50 object-contain p-3 bg-gray-100"
          />
          <div className="p-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Microsoft</h3>
            <p className="text-sm text-gray-500 mb-4">
              Implementación completa de token ERC-20 personalizado con funciones adicionales.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-800">350 MXN</span>
              <button
                onClick={manejarClickCostco}
                className="text-sm text-blue-600 hover:underline flex items-center"
              >
                Comprar <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta 3 - Sams Club */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition">
          <img
            src="data:image/png;base64,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"
            alt="NFT Marketplace"
            className="w-full h-50  object-contain p-3 bg-gray-100"
          />
          <div className="p-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Nvidia</h3>
            <p className="text-sm text-gray-500 mb-4">
              Solución completa para crear y vender NFTs en su propia plataforma.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-800">7,300 MXN</span>
              <a href="#" className="text-sm text-blue-600 hover:underline flex items-center">
                Comprar <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tarjeta 4 - Auditoría de Seguridad */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAflBMVEX4+PgAAAD////7+/vU1NQrKyu0tLTu7u4pKSlzc3OPj499fX3FxcUiIiLi4uIHBweJiYlOTk6fn5+urq7BwcE+Pj7z8/NERETY2NhXV1c3NzcUFBTr6+sbGxvExMTh4eFoaGimpqaamppjY2NbW1twcHAxMTFnZ2eEhIR5eXnKJTKFAAAE3ElEQVR4nO2da3OqOhhGTUCw2qIgIl5aK2p3/f9/8JAEJGFzZk/fA7hP8qwvCAFnsiY3Qi6TCQAAAAAAAAAAAAAAAAAAAAAAAPDX4vFe8J4djxEplYV+UCyu2+l/YHtdFIEfuqLO41GxW7KeWO6KyAFx3EvjvpTVxKnHnx2vYeGvm76lCTavNnvj2ecQ0gSfmbXieP42lDXG3nJLvfHX4aQJ7MyoPB3Wmp3euD+0NcZ867x5x+GtMXa0rQXHe2+tdRFbltx4MoY1xhKrvHnhONYYC23Kpnw1lraVTckt6+3V/U8ss2fHtT/4eixrjK3tSW58kPf3bjbWaBuvQhBYUynwYExtgS3Jbbx6VGBNXcp3Y2rb2aJtsh9T2/7Zse2L8DCmtkP47Pj2gxeNaY2xyI6q1Buhp00nhzYKPrRBG7T9DGgjAW0koI0EtJGANhLQRgLaSEAbCWgjAW0koI1Eoy0+J8m5NYbmvbyW3Mof8/J4h7YHjba7mIHxbUZyKq6JT1tZeexlvKV12l6EooUZyVmtLYQ2A2gjAW0koI0EtJGANhI/1ra5z1e3aZeR+GVx7x47fWg+YTupbRNUM3Sz88y889drNffWf6kvzcUpY6uoPDx0uqftgyX61ORCv8/XQvK9rk2FbB3WprsReh63XVuzvS+Ntg/uujZF9JGmkemtsnZK13XI9aGNQ5so31T896okU/Pb3mV556shwPFJnEw0bdH32+H98Y9OamuC5Ys/lxN3ZT5shpun9anS1uqYclGbHrqQ+VKkr7Yckd68aaWtPenBQW1me1fm01iMYi7Rh2TuxIVVpa09nctBbeZw1Y24dGbs+CjkanKleP6oHJzW1p50epSZ803m0UDnpG6W2lqtYge1teeFp9JOzLuptLXXLbBT2791iofVUWctSvzfmrquafslYlmYkdwhtXWjfbn6vbJUMa+1tceUi7ItV/m4lbe1h63XdpioRKKTGzWpWbx/iUtrFdT5sdUNbaohZrSzPrmhzcyl8m1gV7XbuvrZHNF2k5K2WhwzUxu/aWHybpFvZflnNE6qZbkc0cZk94X3SDjTqjtDeydtFo+6NB5lKtX+pkyGc5e0VW2JQPZlzIp6qUW9ByRQ3eEzmTOrCmQmbzxWSi9R/Ywr2lhRyQl9/9g0Jcz+tnydrHP1s65aVcrjWZokqbpRTht0RpvR6y0wGiBpbgbmj86NS2sN0OPGpUzK5AJ1DdmV6doCVWnWnLXHvoz+8qrGdUhbGdlTFfmoLNffszDMhJ9TeSzbaNu00hoGrW9+l486JK3r4pV42BVtjO1v82R+U71ES4F2ZIfrd1F0fg49xPf56iXWuiXrZ9zQNijQBm3Q9kOgjQS0kYA2EtBGAtpIQBsJaCMBbSSgjQS0kYA2ElhRiwTWb6OB1QJpYG1KClgJlQTW3SWBVZ5JjLym+LOj2xtjrmBv0XYw2C+BBnbnIIG9YGhkY2mzKbGVye08jrWzVYkNu6oRwR5+NLBjJI2hd3W1c39S7IZLheedS8n0w9TWvZfLeiG7/Tn+NG6ZdbWBBvaVp8G9tPcWXJx6llsr8XiU7Hp7tV/ukojbnD8bPDF3KCgW1+3XlMzX9rooAj/kjkhTeK3JQDQ8l5QBAAAAAAAAAAAAAAAAAAAAAAD43/EP3K5gVL8TzUEAAAAASUVORK5CYII="
            alt="Auditoría de Seguridad"
            className="w-full h-50 object-contain p-3 bg-gray-100"
          />
          <div className="p-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Uber</h3>
            <p className="text-sm text-gray-500 mb-4">
              Servicio integral de auditoría de seguridad para contratos inteligentes existentes.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-800">150 MXN</span>
              <a href="#" className="text-sm text-blue-600 hover:underline flex items-center">
                Comprar <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compras;
