import LabelInput from "components/LabelInput";
import { IMAGES } from "constants/theme"
import { Link } from "expo-router";
import { View, Image, Button } from "react-native"
import * as Animatable from 'react-native-animatable';
const SignIn = () => {

    const handleOnLogin =()=>{

    }
    return (
        <View className="container">

            <View className="grid grid-cols-12 justify-center items-center authentication authentication-basic h-full">
                <View className="xxl:col-span-4 xl:col-span-4 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12"></View>
                <View className="xxl:col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-8 col-span-12">
                    <View className="box my-4">
                        <View className="box-body p-[3rem]">
                            <View className="mb-3 flex justify-center">
                                <Image source={IMAGES.logo} />
                            </View>
                            <Animatable.Text
                                animation="fadeInUp"
                                duration={1000}
                                delay={700}
                                className="h5 mb-2 text-center">
                                Sign In
                            </Animatable.Text >
                            <Animatable.Text
                                animation="fadeInUp"
                                duration={1000}
                                delay={700}
                                className="mb-4 text-textmuted dark:text-textmuted/50 opacity-70 font-normal text-center">
                                Welcome back ML shop !
                            </Animatable.Text>

                            <View className="grid grid-cols-12 gap-y-3">
                                <View className="xl:col-span-12 col-span-12">
                                    <LabelInput />
                                </View>
                                <View className="xl:col-span-12 col-span-12 mb-2">
                                    <LabelInput />
                                </View>
                            </View>
                            <View className="grid mt-4">
                                <Button onPress={handleOnLogin} title="Sign In" />
                            </View>
                            <View className="text-center">
                                <Animatable.Text
                                animation="fadeInUp"
                                duration={1000}
                                delay={700}
                                 className="text-textmuted dark:text-textmuted/50 mt-3 mb-0">
                                    Dont have an account? 
                                    <Link href="/sign-up" className="text-primary">Sign Up</Link>
                                    </Animatable.Text>
                            </View>
                            {/* <View className="btn-list text-center mt-3">
                                <button className="ti-btn ti-btn-icon btn-wave ti-btn-soft-primary">
                                    <i className="ri-facebook-line leading-none align-center text-[17px]"></i>
                                </button>
                                <button className="ti-btn ti-btn-icon btn-wave ti-btn-soft-primary1">
                                    <i className="ri-twitter-x-line leading-none align-center text-[17px]"></i>
                                </button>
                                <button className="ti-btn ti-btn-icon btn-wave ti-btn-soft-primary2">
                                    <i className="ri-instagram-line leading-none align-center text-[17px]"></i>
                                </button>
                            </View> */}
                        </View>
                    </View>
                </View>
                <View className="xxl:col-span-4 xl:col-span-4 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12"></View>
            </View>


        </View>
    )
}
export default SignIn