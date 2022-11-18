import Box from '../../designSystem/Box/Box';
import Text from '../../designSystem/Text/Text';
import { TranslationExamplesProps } from './TranslationExamples.types';

const TranslationExamples = ({ examples }: TranslationExamplesProps) => {
  return (
    <Box>
      <Text fontSize={16} marginBottom="s" fontFamily="Roboto-Italic">
        Examples :
      </Text>
      {examples.map((example, exampleIndex) => (
        <Box
          flexDirection="row"
          alignItems="center"
          flexWrap="wrap"
          marginBottom="xxs"
          key={`example#${exampleIndex}`}>
          <Text color="primaryHighlight">
            {example.main.text}
            <Text fontSize={13} color="secondaryText" fontFamily="Roboto-Italic">
              {' '}
              {example.main.type}
            </Text>
          </Text>
          <Text marginHorizontal="s" color="secondaryText">
            -
          </Text>
          {example.translations.map((translation, translationIndex) => (
            <>
              {translationIndex > 0 && <Text marginRight="sToM">·</Text>}
              <Text marginRight="sToM">
                {translation.text}
                <Text fontSize={13} color="secondaryText" fontFamily="Roboto-Italic">
                  {' '}
                  {translation.type}
                </Text>
              </Text>
            </>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default TranslationExamples;
