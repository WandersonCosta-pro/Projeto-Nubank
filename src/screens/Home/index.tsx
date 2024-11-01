import { Image, ScrollView, StyleSheet, Text, View, Modal, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import logo from '../../assets/logo (1).png';
import setting from '../../assets/setting.png';
import mastercard from '../../assets/mastercard.png';
import wallet from '../../assets/Wallet.png';
import pix from '../../assets/pix.png';
import boleto from '../../assets/boleto.png';
import dinheiro from '../../assets/dinheiro.png';

export function Home() {
  const [showPixInfo, setShowPixInfo] = useState(false);
  const [showBoletoInfo, setShowBoletoInfo] = useState(false);
  const [showDepositoInfo, setShowDepositoInfo] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={logo} />
          <Image source={setting} />
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View />
            <Image source={mastercard} />
          </View>
          <Text style={styles.cardText}>Wanderson Costa</Text>
        </View>
        <View style={styles.cardDetails}>
          <View style={styles.cardDetailsHeader}>
            <Text style={styles.cardDetailsHeaderText}>Saldo disponível</Text>
            <Image source={wallet} />
          </View>
          <Text style={styles.cardDetailsText}>R$5450,20</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Do que precisa?</Text>
        <ScrollView style={styles.footerContentScroollView} showsHorizontalScrollIndicator={false} horizontal={true}>
          <TouchableOpacity style={styles.footerCard} onPress={() => setShowPixInfo(true)}>
            <Image source={pix} />
            <Text style={styles.footerCardText}>Fazer um Pix</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerCard} onPress={() => setShowBoletoInfo(true)}>
            <Image source={boleto} />
            <Text style={styles.footerCardText}>Pagar um Boleto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerCard} onPress={() => setShowDepositoInfo(true)}>
            <Image source={dinheiro} />
            <Text style={styles.footerCardText}>Fazer um Depósito</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Modal for Pix */}
      <Modal visible={showPixInfo} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Informações para fazer um Pix:</Text>
            <Text style={styles.modalText}>Banco: Nubank</Text>
            <Text style={styles.modalText}>Agência: 0001</Text>
            <Text style={styles.modalText}>Conta: 123456-7</Text>
            <Text style={styles.modalText}>Chave Pix: wandersonteixeira@gmail.com</Text>
            <Button title="Fechar" onPress={() => setShowPixInfo(false)} />
          </View>
        </View>
      </Modal>

      {/* Modal for Boleto */}
      <Modal visible={showBoletoInfo} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Informações para pagar um Boleto:</Text>
            <Text style={styles.modalText}>Banco: Banco do Brasil</Text>
            <Text style={styles.modalText}>Agência: 1234</Text>
            <Text style={styles.modalText}>Conta: 567890-0</Text>
            <Text style={styles.modalText}>Código do Boleto: 12343.89657 12342.869365 09234.786406 0 000000000088756</Text>
            <Button title="Fechar" onPress={() => setShowBoletoInfo(false)} />
          </View>
        </View>
      </Modal>

      {/* Modal for Depósito */}
      <Modal visible={showDepositoInfo} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Informações para fazer um Depósito:</Text>
            <Text style={styles.modalText}>Banco: Caixa Econômica</Text>
            <Text style={styles.modalText}>Agência: 5678</Text>
            <Text style={styles.modalText}>Conta: 123456-7</Text>
            <Text style={styles.modalText}>Nome: Wanderson Costa</Text>
            <Button title="Fechar" onPress={() => setShowDepositoInfo(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#820AD1',
  },
  content: {
    paddingHorizontal: 30,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
  },
  card: {
    width: '100%',
    height: 190,
    backgroundColor: '#9500f6',
    borderRadius: 20,
    elevation: 5,
    marginBottom: 20,
    padding: 20,
    justifyContent: 'space-between',
  },
  cardDetails: {
    width: '100%',
    height: 120,
    backgroundColor: '#9500f6',
    borderRadius: 20,
    elevation: 5,
    padding: 20,
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '600',
  },
  cardDetailsHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cardDetailsText: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '600',
  },
  cardDetailsHeaderText: {
    color: '#fff',
  },
  footer: {
    paddingTop: 30,
    paddingLeft: 20,
  },
  footerText: {
    marginHorizontal: 20,
    paddingBottom: 30,
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  footerCard: {
    width: 100,
    height: 127,
    backgroundColor: '#9500f6',
    elevation: 5,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  footerCardText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
  },
  footerContentScroollView: {
    height: 400,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#820AD1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '85%',
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 10,
    fontSize: 16,
    color: '#333',
  },
});
