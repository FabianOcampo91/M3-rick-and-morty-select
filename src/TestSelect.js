// import{useEffect, useState} from 'react'
// import'./App.css'
// import'./TestSelect.css'

// const TestSelect = () => {
//     const[select, setSelect] = useState('')
//     const [options, setOptions] = useState([])
//     const [user, setUser] = useState({})

//     const dataApi = [
//         {
//             id: '1',
//             name: 'Pedro'
//         },
//         {
//             id: '2',
//             name: 'Marcos'
//         }
//     ]

//     useEffect(() => {
//         setOptions(dataApi);
//     }, [])

//     useEffect(() => {
//         const usr = dataApi.find((u) => u.id === select)
//         setUser(usr)
        
//     }, [select]);

//     useEffect(() => {
//         if (user?.name){
//             alert(`Bienvenido ${user.name}`)
//         }
//     }, [user])

//     return (
//         <div className="container">
//             <h1>Test Select</h1>
//             <select value={select} onChange={(e) => setSelect(e.target.value)}>
//                 <option value="">-</option>
//                 {options.map((opt, index) => (
//                     <option key={index}>{opt.name}</option>
//                 ))}
//             </select>
//         </div>
//     )
// }