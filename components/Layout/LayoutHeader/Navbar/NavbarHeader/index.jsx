import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import {
  StyledHorizontal,
  StyledImg,
  StyledText,
  StyledMenu,
  StyledMenuItem,
} from 'components/Common/commonStyles';
import Icon from 'components/Icon';
import { getCookie, setCookie } from 'utils/auth.utils';
import { currencyOptions, languageOptions } from 'utils/layout.utils';
import { changeLanguageAction } from 'store/language/language.action';

const NavbarHeader = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState(currencyOptions[0]);
  const currentLanguage = useSelector((state) => state.language);

  const lang = router.asPath?.split('/')?.[1];

  const changeLanguage = async (locale) => {
    const { pathname, query } = router;
    dispatch(changeLanguageAction(locale));
    await i18n.changeLanguage(locale);
    const href = pathname.replace('[locale]', String(locale));
    await router.push({ pathname: href }, undefined, { shallow: true });
    router.reload();
  };

  const currencyMenu = (
    <StyledMenu>
      {currencyOptions.map((curr) => (
        <StyledMenuItem
          key={curr}
          onClick={() => {
            setCurrency(curr);
            setCookie('currency', curr);
            router.reload();
          }}
        >
          {curr}
        </StyledMenuItem>
      ))}
    </StyledMenu>
  );

  const languageMenu = (
    <StyledMenu>
      {Object.keys(languageOptions).map((key) => (
        <StyledMenuItem p="0" key={key} onClick={() => changeLanguage(key)}>
          <StyledImg
            width="24px"
            height="16px"
            borderRadius="xxs"
            src={languageOptions[key].label}
            alt={key}
          />
        </StyledMenuItem>
      ))}
    </StyledMenu>
  );

  return (
    <StyledHorizontal pb="12px" fontSize={2}>
      <Space size={20}>
        <div>
          <Icon name="icon-support" mr="5px" fontSize={16} />
          <span>{t('MenuNav_support')}</span>
        </div>
        <div>
          <Icon name="icon-mail" mr="5px" fontSize={16} />
          <span>{t('MenuNav_mail')}</span>
        </div>
        <Dropdown overlay={currencyMenu} placement="bottomCenter">
          <div>
            <StyledText mr="5px">
              {getCookie('currency') || currency}
            </StyledText>
            <DownOutlined />
          </div>
        </Dropdown>
        <Dropdown overlay={languageMenu} placement="bottomCenter">
          <div>
            <StyledImg
              width="24px"
              height="16px"
              src={languageOptions[lang]?.label}
              alt={currentLanguage.language}
              mr="5px"
              borderRadius="xxs"
            />
            <DownOutlined />
          </div>
        </Dropdown>
      </Space>
    </StyledHorizontal>
  );
};

export default NavbarHeader;
