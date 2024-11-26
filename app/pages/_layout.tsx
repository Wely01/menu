import { Drawer} from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer 
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#f4f4f4',  // Cor de fundo do drawer
        width: 250,                  // Largura do drawer
      },
      drawerContentStyle: {
        paddingVertical: 10,         // Espaçamento interno entre os itens
      },
      drawerLabelStyle: {
        fontSize: 18,                // Tamanho da fonte dos labels
        color: '#333',               // Cor dos labels
      },
      drawerActiveBackgroundColor: '#4caf50',  // Cor de fundo do item ativo
      drawerActiveTintColor: '#ffffff',        // Cor do texto do item ativo
      drawerInactiveTintColor: '#555',         // Cor do texto dos itens inativos
    }}
    >
      <Drawer.Screen
        name="index"
        options={{ title: 'Home', headerShown: false, }} />
      <Drawer.Screen
        name="pages/Eventos"
        options={{ title: 'SubMenu 1' }} />
      <Drawer.Screen
        name="pages/Calendario"
        options={{ title: 'SubMenu 2' }} />
      <Drawer.Screen
        name="pages/Boletim"
        options={{ title: 'SubMenu 3' }} />
      <Drawer.Screen
        name="pages/Contato"
        options={{ title: 'SubMenu 4' }} />  
    </Drawer>
     
  );
}

