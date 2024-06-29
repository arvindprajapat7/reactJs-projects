import React from 'react'

const CountrySelect = ({setCountry}) => {
    const getCountryNm=(e)=>{
        setCountry(e.target.value)
    }
  return (
    <>
        <div className='d-flex align-items-center py-4 justify-content-center bg-white'>
            <p className='mb-0 me-3'>Choose Country</p>
            <select style={{width:"100px"}} onChange={getCountryNm}>
                <option value="ae">ae</option>
                <option value="ar">ar</option>
                <option value="at">at</option>
                <option value="au">au</option>
                <option value="be">be</option>
                <option value="bg">bg</option>
                <option value="br">br</option>
                <option value="ca">ca</option>
                <option value="ch">ch</option>
                <option value="cn">cn</option>
                <option value="co">co</option>
                <option value="cu">cu</option>
                <option value="cz">cz</option>
                <option value="de">de</option>
                <option value="eg">eg</option>
                <option value="fr">fr</option>
                <option value="gb">gb</option>
                <option value="gr">gr</option>
                <option value="hk">hk</option>
                <option value="hu">hu</option>
                <option value="id">id</option>
                <option value="ie">ie</option>
                <option value="il">il</option>
                <option value="in">in</option>
                <option value="it">it</option>
                <option value="jp">jp</option>
                <option value="kr">kr</option>
                <option value="lt">lt</option>
                <option value="lv">lv</option>
                <option value="ma">ma</option>
                <option value="mx">mx</option>
                <option value="my">my</option>
                <option value="ng">ng</option>
                <option value="nl">nl</option>
                <option value="no">no</option>
                <option value="nz">nz</option>
                <option value="ph">ph</option>
                <option value="pl">pl</option>
                <option value="pt">pt</option>
                <option value="ro">ro</option>
                <option value="rs">rs</option>
                <option value="ru">ru</option>
                <option value="sa">sa</option>
                <option value="se">se</option>
                <option value="sg">sg</option>
                <option value="si">si</option>
                <option value="sk">sk</option>
                <option value="th">th</option>
                <option value="tr">tr</option>
                <option value="tw">tw</option>
                <option value="ua">ua</option>
                <option value="us">us</option>
                <option value="ve">ve</option>
                <option value="za">za</option>
            </select>
        </div>
    </>
  )
}

export default CountrySelect