import { TextInput,View } from 'react-native';
import * as Animatable from 'react-native-animatable';

interface LabelInputProps{
    className?:string
}
const LabelInput = ({className}:LabelInputProps) => {
    return (
        <View className={className}>
            <Animatable.Text
                animation="fadeInUp"
                duration={1000}
                delay={700}
                className="form-label text-defaulttextcolor">
                User Name 
            </Animatable.Text>
            <TextInput  className="form-control" placeholder="user name"/>
        </View>
    )
}
export default LabelInput