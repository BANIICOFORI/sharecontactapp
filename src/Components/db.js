import React from 'react'
import Profile from '../Screens/Profile'

const db = () => {
    const dataBase= [
        {name:"Herbert Ofori",role:"Head of Market",}
    ]
  return (
    <View>
        <FileList 
        data ={dataBase}
        renderItem={({item})=>{
            return<Profile 
            name={item.name}
            role={item.role}
            />
        }}
        keyExtractor={(item)=>item}
        />
    </View>
  )
}

export default db
