import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { navigate } from '../../../Navigators/Root';

import LogoIcon from '../../../Assets/SVGIcons/LogoIcon';
import ProfileIcon from '../../../Assets/SVGIcons/ProfileIcon';

import { useTheme } from '../../../Theme';
import styles from './styles';

export default function OfflineAccountScreen() {
  const { Layout, Colors } = useTheme();

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <View style={styles.container}>
        <View>
          <LogoIcon small={true}/>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Wallet</Text>
          <Text style={styles.subTitle}>Your personal money manager</Text>
          <View style={styles.scrollView}>
            <Text style={styles.subTitle1}>Enter with offline account</Text>
            <Text style={styles.desc}>
              Your data will be saved only locally on your phone. your risk
              losing your data if you uninstall the app or change your device
              . To prevent data loss. we recommend exporting bacup from
              setting regulary.
            </Text>
          </View>
          <View style={styles.btnView}>
            <TouchableOpacity
              style={styles.btnAccount}
              onPress={() => navigate('SetCurrencyScreen')}>
              <ProfileIcon />
              <Text style={styles.btnText}>offline account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomTextView}>
            <Text style={styles.blackText}>
              By signing, you agree with our
              <Text
                style={styles.greenText}
                onPress={() => console.log('terms')}>
                {''} Terms &amp; Conditions
              </Text>{' '}
              and{' '}
              <Text
                style={styles.greenText}
                onPress={() => console.log('privacy')}>
                Privacy policy.
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
