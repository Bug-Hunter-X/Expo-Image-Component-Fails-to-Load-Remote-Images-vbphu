// bugSolution.js
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const RemoteImage = ({ source }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {!loading && error && <Text>Error loading image</Text>}
      {!error &&
        <Image
          style={styles.image}
          source={{ uri: source }}
          onLoadEnd={() => setLoading(false)}
          onError={(e) => {
            setError(true);
            setLoading(false);
            console.error('Error loading image:', e);
          }}
        />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default RemoteImage;