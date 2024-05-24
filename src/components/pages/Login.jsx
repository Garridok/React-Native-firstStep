import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';


const initialValues = {
    email: '',
    password: ''

}


export default function LoginPage() {
    return (
         
            <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
                {({ handleChange, handleSubmit, values }) => {
                    return (
                        <View>
                            <TextInput placeholder='Email' value={values.email} onChange={handleChange('email')}/>
                            <TextInput placeholder='Password' value={values.password} onChange={handleChange('password')} />

                            <Button title='Log In' onPress={handleSubmit} />
                        </View>
                    )
                }}
            </Formik>
        
    )
}