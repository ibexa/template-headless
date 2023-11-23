(function (global, doc, ibexa) {
    let contentTypesDataMap = null;
    let contentTypesDataMapByHref = null;

    /**
     * Creates map with content types identifiers as keys for faster lookup
     *
     * @function createContentTypeDataMap
     * @returns {Object} contentTypesDataMap
     */
    const createContentTypeDataMap = () =>
        Object.values(ibexa.adminUiConfig.contentTypes).reduce((contentTypeDataMap, contentTypeGroup) => {
            for (const contentTypeData of contentTypeGroup) {
                contentTypeDataMap[contentTypeData.identifier] = contentTypeData;
            }

            return contentTypeDataMap;
        }, {});

    const createContentTypeDataMapByHref = () =>
        Object.values(ibexa.adminUiConfig.contentTypes).reduce((contentTypeDataMapByHref, contentTypeGroup) => {
            for (const contentTypeData of contentTypeGroup) {
                contentTypeDataMapByHref[contentTypeData.href] = contentTypeData;
            }

            return contentTypeDataMapByHref;
        }, {});

    /**
     * Returns an URL to a content type icon
     *
     * @function getContentTypeIcon
     * @param {String} contentTypeIdentifier
     * @returns {String|null} url to icon
     */
    const getContentTypeIconUrl = (contentTypeIdentifier) => {
        if (!contentTypesDataMap) {
            contentTypesDataMap = createContentTypeDataMap();
        }

        if (!contentTypeIdentifier || !contentTypesDataMap[contentTypeIdentifier]) {
            return null;
        }

        const iconUrl = contentTypesDataMap[contentTypeIdentifier].thumbnail;

        return iconUrl;
    };

    /**
     * Returns contentType name from contentType identifier
     *
     * @function getContentTypeName
     * @param {String} contentTypeIdentifier
     * @returns {String|null} contentType name
     */
    const getContentTypeName = (contentTypeIdentifier) => {
        if (!contentTypesDataMap) {
            contentTypesDataMap = createContentTypeDataMap();
        }

        if (!contentTypeIdentifier || !contentTypesDataMap[contentTypeIdentifier]) {
            return null;
        }

        return contentTypesDataMap[contentTypeIdentifier].name;
    };

    const getContentTypeIconUrlByHref = (contentTypeHref) => {
        if (!contentTypesDataMapByHref) {
            contentTypesDataMapByHref = createContentTypeDataMapByHref();
        }

        if (!contentTypeHref || !contentTypesDataMapByHref[contentTypeHref]) {
            return null;
        }

        const iconUrl = contentTypesDataMapByHref[contentTypeHref].thumbnail;

        return iconUrl;
    };

    const getContentTypeNameByHref = (contentTypeHref) => {
        if (!contentTypesDataMapByHref) {
            contentTypesDataMapByHref = createContentTypeDataMapByHref();
        }

        if (!contentTypeHref || !contentTypesDataMapByHref[contentTypeHref]) {
            return null;
        }

        return contentTypesDataMapByHref[contentTypeHref].name;
    };

    ibexa.addConfig('helpers.contentType', {
        getContentTypeIconUrl,
        getContentTypeName,
        getContentTypeIconUrlByHref,
        getContentTypeNameByHref,
    });
})(window, window.document, window.ibexa);
