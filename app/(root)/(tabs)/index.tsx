import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className=" text-3xl font-extrabold text-red-600">
        Welcome to RealState App
      </Text>
      <Link href="/SignIn">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href={`/properties/${1}`}>Property</Link>
    </View>
  );
}
